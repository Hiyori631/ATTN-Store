from django.shortcuts import render
from django.http import JsonResponse
from ATTN_Backend.models import Product


def website_description(request):
    # Fetch all recipes from the database
    recipes = Product.objects.all().values()  # .values() returns dictionaries of each record

    # Convert queryset to a list so JsonResponse can serialize it
    recipes_list = list(recipes)

    # Return JSON response
    return JsonResponse({"recipes": recipes_list})
