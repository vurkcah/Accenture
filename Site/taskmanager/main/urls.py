from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.index),
    path('kp', views.kp, name='kp'),
    path('reg', views.reg),
    path('zav', views.zav),
    path('angcchpp', views.angcchpp),
    path('angctf', views.angctf),
    path('ano', views.ano),
    path('azp', views.azp),
    path('kco', views.kco),
    path('kct', views.kct),
    path('kkco', views.kkco),
    path('kkct', views.kkct),
    path('nta', views.nta),
    path('ntac', views.ntac),
    path('otgr', views.otgr),
    path('rs', views.rs),
    path('stan1', views.stan1),
    path('stan2', views.stan2),
    path('stan3', views.stan3),
    path('tk', views.tk),
]
