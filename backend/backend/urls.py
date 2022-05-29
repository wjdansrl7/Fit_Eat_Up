
from django.contrib import admin
from django.urls import path, include

from friend import views
from user import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('__debug__/', include('debug_toolbar.urls') ),
    path('post/', views.post_view),
    path('review/', views.review_view),
]
