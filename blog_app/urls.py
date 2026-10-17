from django.urls import path
from blog_app import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('news/', views.news, name='news'),
    path('management/', views.management, name='management'),
    path('facts/', views.facts, name='facts'),
    path('contacts/', views.contacts, name='contacts'),

    path('history/', views.history, name='history'),
    path('history/people/', views.people, name='people'),
    path('history/photos/', views.photos, name='photos'),
]