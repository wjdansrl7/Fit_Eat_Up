from django.shortcuts import render

from friend.models import Post


def post_view(request):
    posts = Post.objects.all()
    return render(request, 'friend/index.html', {
        'posts': posts,
    })