from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
import logging
from .models import Post

logger = logging.getLogger('django')

# 1. 新增資料的 API
@api_view(['GET'])
def add_post(request):
    # 從 URL 參數取得資料，若無則設為空字串
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')
    
    # 建立 ORM 物件並儲存
    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    
    # 判斷 title 是否存在並回傳結果
    if title:
        return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response({"res": "parameter: name is None"}, status=status.HTTP_400_BAD_REQUEST)

# 2. 列出資料的 API
@api_view(['GET'])
def list_post(request):
    # 取得資料庫中所有 Post 資料並轉為字典格式 
    posts = Post.objects.all().values()
    
    # 直接回傳 JsonResponse (教材推薦作法) 
    return JsonResponse(list(posts), safe=False)