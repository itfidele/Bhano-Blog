from bs4 import BeautifulSoup
import os
from urllib.request import urlopen,Request,install_opener,urlretrieve,build_opener
import random
from operations.lists import pamakeolinks as links
from main.models import Post,Images
from django.core.files import File
from django.contrib.auth.models import User

user_agent_list = [
    #Chrome
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    'Mozilla/5.0 (Windows NT 5.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
    #Firefox
    'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
    'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)',
    'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
    'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)'
]


class ScrapeFunction:
    user_agent=user_agent = random.choice(user_agent_list)
    headers = {'User-Agent': user_agent }

    def __init__(self,):
        super().__init__()

    def getHTML(self,link):
        try:
            html = urlopen(link).read()
        except Exception as e:
            req = Request(link, headers=self.headers)
            html = urlopen(req).read()
            
        response = BeautifulSoup(html, "html.parser")
        return response

class PamakeoPress:
    
    def __init__(self):
        super().__init__()

    def news_items(self,links=None):
        if links == None:
            return False

        try:
            user=User.objects.all().first()
            i=0
            for link in links:
                print("START")
                get_html=ScrapeFunction().getHTML(link)
                im=Images()
                thumbnail=self.getThumbnail(link)
                title=self.getTitle()
                result = urlretrieve(thumbnail)
                im.image_from=title
                im.image.save(os.path.basename(im.image_from+str(i) +'.png'), File(open(result[0], 'rb')))
                post=Post.objects.filter(title=title).exists()

                #check if post not exist
                if post:
                    continue
                
                post_item=Post()
                category=self.getCategory()
                post_from='PamakeoPress'
                body=self.getContents()
                
                #insert section
                post_item.title=title
                post_item.thumbnail=im.image
                post_item.post_from=post_from
                post_item.body=body
                post_item.post_category=category
                post_item.status='published'
                post_item.author=user
                post_item.save()
                print(link)
            #continue
        except Exception as e:
            #scrape item section problem
            print("error "+str(e))
            pass

        return i
        

    def getArticleLink(self,inThis):
        arlink=inThis.find('a')['href'].strip()
        return arlink

    def getThumbnail(self,l):
        other=ScrapeFunction().getHTML(l)
        self.contents=other.find(class_='mh-content')
        entry_thumb=self.contents.find(class_='entry-thumbnail')
        thumbnail=entry_thumb.find_all('img')[0]['src']
        if "https:" not in thumbnail:
            thumbnail="http://pamakiopress.rw/{}".format(thumbnail)
            #img_urls="file:///home/hacker/Downloads/{}".format(img_urls)
        return thumbnail
            
    
    def getContents(self):
        contents=self.contents.find(class_='entry-content mh-clearfix')
        htmlContent=contents
        i=0
        for img in contents.find_all('img'):
            i=i+1
            img_urls = img['src']

            if "https:" not in img_urls:
                img_urls="http://pamakiopress.rw/{}".format(img_urls)

            #img_urls="file:///home/hacker/Downloads/{}".format(img_urls)
            if i==1:
                #thumb=im.image
                htmlContent=contents
            im=Images()
            opener = build_opener()
            opener.addheaders = [('User-agent', 'Mozilla/5.0')]
            install_opener(opener)
            title=self.getTitle()
            im.image_from=title
            result=urlretrieve(img_urls)
            im.image.save(os.path.basename(im.image_from+str(i)+'.png'),File(open(result[0], 'rb')))
            im.save()
            htmlContent=str(htmlContent).replace(img['src'],'/media/'+str(im.image))
            
            
        htmlContent=str(htmlContent).replace("(adsbygoogle = window.adsbygoogle || []).push(\{\});",'')
        htmlContent=str(htmlContent).replace('<!-- 720x90 adsense -->','')
        htmlContent=str(htmlContent).replace('<!--CusAds1118-->','')
        
        return htmlContent
    
    def getCategory(self):
        category=self.contents.find(class_='entry-meta-categories')
        category=category.text.strip()
        #print(category)
        return category.capitalize()

    def getTitle(self):
        title=self.contents.find(class_='entry-title')
        title=title.text.strip()
        #print(title)
        return title
#get_html=ScrapeFunction().getHTML("https://pamakiopress.rw/post-sitemap.xml")
#all_tr=get_html.findAll('loc')

#for loc in all_tr:
#    print(loc.get_text())





