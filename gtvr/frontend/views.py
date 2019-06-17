from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')


def testIndex(request):
    return render(request, 'frontend/test.html')

def iframeTest(request):
    return render(request, 'frontend/iframe.html')
