from bs4 import BeautifulSoup
from urllib.request import urlopen,Request,urlretrieve,build_opener,install_opener
import os
import random
from main.models import Post,Images
from django.core.files import File
from django.contrib.auth.models import User
from main.categories import user_agent_list


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

    def news_items(self,link='http://pamakiopress.rw/'):
        try:
            get_html=ScrapeFunction().getHTML(link)
            #get_html=ScrapeFunction().getHTML('file:///home/hacker/Desktop/Video%20Toutorial/Amakuru%20yizewe%20yuzuye%20kandi%20kugihe%20-%20Pamakio%20Press.html')
            #articles=get_html.find_all('article',class_='mh-loop-item')
        except Exception as e:
            pass

        result=list()

        from_={
            'Amakuru':'mh_magazine_lite_posts_focus-3',
            'Imikino':'mh_magazine_lite_posts_focus-4',
            'Politiki':'mh_custom_posts-12',
            'Imyidagaduro':'mh_custom_posts-9',
            'Ubuzima':'mh_custom_posts-8'
            #'utunu n\'utundi'
        }
        i=0
        try:
            for category in from_:
                #print(category)
                #print('--'*15)
                articles=get_html.find(id=from_[category])
                user=User.objects.all().first()
                for li in articles.find_all('figure'):
                    
                    im=Images()
                    
                    news_link=li.find('a')['href']
                    thumbnail=self.getThumbnail(news_link)
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
                    
                    #print(user.username)
                i=i+1
            #continue
        except Exception as e:
            #scrape item section problem
            #print("error "+str(e))
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

#v=PamakeoPress()
#v.getThumbnail()
#v.getContents()
#v.getCategory()
#v.getTitle()
#v.news_items()

'''
for article in articles:
    articlelink=self.getArticleLink(article.find('h3',class_='entry-title mh-loop-title'))
    get_thumbnail=self.getThumbnail(l=articlelink)
    title=self.getTitle()
    body=self.getContents()
    category=self.getCategory()
    result.append({
        'title':title,
        'body':body,
        'category':category,
        'thumbnail':get_thumbnail,
        'post_from':'PamakeoPress',
    })
    #print(get_thumbnail)
return result
#return get_html.getHTML(link)
result.append({
    'thumbnail':thumbnail,
    'title':title,
    'category':self.getCategory(),
    'post_from':'PamakeoPress',
    'body':self.getContents(),
})
'''