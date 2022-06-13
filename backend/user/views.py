from django.shortcuts import render
from user.models import Review
# Create your views here.

def review_view(request):
    reviews = Review.objects.all()
    return render(request)