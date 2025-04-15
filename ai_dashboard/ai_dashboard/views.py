from django.http import HttpResponse

def homepage(request):
    return HttpResponse("✅ Backend is live and responding!")
