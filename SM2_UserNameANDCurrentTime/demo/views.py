from django.shortcuts import render
from .forms import *
import datetime
# Create your views here.
def Home_view(request):
    f=InputForm()
    return render(request,'demo/home.html',{'form':f})
def GetTime_view(request):
    name=request.GET['name']
    respnse=render(request,'demo/gettime.html',{'name':name})
    respnse.set_cookie('name',name)
    return respnse

def result_view(request):
    name=request.COOKIES.get('name')
    t=datetime.datetime.now()
    return render(request,'demo/result.html',{'time':t,'name':name})
