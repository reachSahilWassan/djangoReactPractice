from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
from django.middleware.csrf import get_token
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def home(request):
    # sets csrf_cookie in the response
    csrf_token = get_token(request)
    return Response({"message": "This message gets data from backend to frontend"})
