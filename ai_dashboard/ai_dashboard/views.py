from django.http import HttpResponse

def homepage(request):
    return HttpResponse("<h1>Welcome to the AI Transparency Dashboard!</h1>")