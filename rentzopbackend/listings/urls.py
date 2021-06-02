from django.urls import path
from .views import ListingsView, ListingView, SearchView, AddListing

urlpatterns = [
    path('', ListingsView.as_view()),
    path('search', SearchView.as_view()),
    path('<slug>', ListingView.as_view()),
    path('addListing', AddListing.as_view()),
]
