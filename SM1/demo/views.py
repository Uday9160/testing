from django.shortcuts import render

# Create your views here.
def InputView(request):
    cnt=int(request.COOKIES.get('count',0))
    cnt=cnt+1
    response=render(request,'demo/home.html',{'count':cnt})
    response.set_cookie('count',cnt)
    return response
