from django.shortcuts import render


def home_page(request):
    return render(request, "home.html")

def news(request):
    return render(request, 'news.html')


def management(request):
    return render(request, 'management.html')


def facts(request):
    return render(request, 'facts.html')


def contacts(request):
    return render(request, 'contacts.html')

def history(request):
    return render(request, 'history.html')

def people(request):
    return render(request, 'people.html')

def photos(request):
    return render(request, 'photos.html')

