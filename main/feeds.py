from django.contrib.syndication.views import Feed
from django.template.defaultfilters import truncatewords
from .models import Post
class LatestPostsFeed(Feed):
    title = 'Byosehano | Sobanukirwa, Imikino, Ikoranabuhanga, Ubuzima, Politiki, Urukundo, no Hirya no Hino'
    link = '/'
    description = 'Byosehano ni urubuga rukugezaho amakuru atandukanye anjyanye na Sobanukirwa, Imikino, Ikoranabuhanga, Ubuzima, Politiki, Urukundo, no Hirya no Hino nibindi byinshi bitandukanye.'
    def items(self):
        return Post.published.all().order_by('-publish')
    def item_title(self, item):
        return item.title
    def item_description(self, item):
        return truncatewords(item.body, 500)