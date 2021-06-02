from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, listingDetailSerializer
from datetime import datetime, timezone, timedelta
class AddListing(APIView):
    def post(self, request, format=None):
        permission_classes = (permissions.IsAuthenticated, )
        data = self.request.data

        realtor = data[request.user]
        slug = data['slug']
        title = data['title']
        address = data['address']
        city = data['city']
        state = data['state']
        zipcode = data['zipcode']
        description = data['description']
        sale_type = data['sale_type']
        price = data['price']
        bedrooms = data['bedrooms']
        bathrooms = data['bathrooms']
        home_type = data['home_type']
        sqft = data['sqft']
        open_house = data['open_house']
        photo_main = data['photo_main']
        photo_1 = data['photo_1']
        photo_2 = data['photo_2']
        photo_3 = data['photo_3']
        photo_4 = data['photo_4']
        photo_5 = data['photo_5']
        is_published = data['is_published']
        list_date = data['list_date']
        newprop = Listing.objects.create(relator=relator,slug=slug,title=title,address=address,city=city,state=state,zipcode=zipcode,description=description,sale_type=sale_type,price=price,bedrooms=bedrooms,bathrooms=bathrooms,home_type=home_type,sqft=sqft,open_house=open_house,photo_main=photo_main,photo_1=photo_1,photo_2=photo_2,photo_3=photo_3,photo_4=photo_4,photo_5=photo_5,is_published=is_published ,list_date=list_date)
        newprop.save()
        return Response({'success': 'User created successfully'})

class ListingsView(ListAPIView):
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'

class ListingView(RetrieveAPIView):
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = listingDetailSerializer
    lookup_field = 'slug'

class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer

    def post(self, request, format=None):
        queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
        data = self.request.data

        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact=sale_type)

        price = data['price']
        if price == '0+':
            price = 0
        if price == '10000+':
            price = 0
        elif price == '20,000+':
            price = 200000
        elif price == '40,000+':
            price = 400000
        elif price == '60,000+':
            price = 600000
        elif price == '80,000+':
            price = 800000
        elif price == 'Any':
            price = -1
        if price != -1:
            queryset = queryset.filter(price__gte=price)
        
        bedrooms = data['bedrooms']
        if bedrooms == '0+':
            bedrooms = 0
        elif bedrooms == '1+':
            bedrooms = 1
        elif bedrooms == '2+':
            bedrooms = 2
        elif bedrooms == '3+':
            bedrooms = 3
        elif bedrooms == '4+':
            bedrooms = 4
        elif bedrooms == '5+':
            bedrooms = 5
        
        queryset = queryset.filter(bedrooms__gte=bedrooms)

        home_type = data['home_type']
        queryset = queryset.filter(home_type__iexact=home_type)

        bathrooms = data['bathrooms']
        if bathrooms == '0+':
            bathrooms = 0.0
        elif bathrooms == '1+':
            bathrooms = 1.0
        elif bathrooms == '2+':
            bathrooms = 2.0
        elif bathrooms == '3+':
            bathrooms = 3.0
        elif bathrooms == '4+':
            bathrooms = 4.0
        
        queryset = queryset.filter(bathrooms__gte=bathrooms)

        sqft = data['sqft']
        if sqft == '1000+':
            sqft = 1000
        elif sqft == '1200+':
            sqft = 1200
        elif sqft == '1500+':
            sqft = 1500
        elif sqft == '2000+':
            sqft = 2000
        elif sqft == 'Any':
            sqft = 0
        
        if sqft != 0:
            queryset = queryset.filter(sqft__gte=sqft)
        
        days_passed = data['days_listed']
        if days_passed == '1 or less':
            days_passed = 1
        elif days_passed == '2 or less':
            days_passed = 2
        elif days_passed == '5 or less':
            days_passed = 5
        elif days_passed == '10 or less':
            days_passed = 10
        elif days_passed == '20 or less':
            days_passed = 20
        elif days_passed == 'Any':
            days_passed = 0
        
        for query in queryset:
            num_days = (datetime.now(timezone.utc) - query.list_date).days

            if days_passed != 0:
                if num_days > days_passed:
                    slug=query.slug
                    queryset = queryset.exclude(slug__iexact=slug)
        
        has_photos = data['has_photos']
        if has_photos == "0":
            has_photos=0
        else :
            if has_photos == '1+':
                has_photos = 1
            elif has_photos == '3+':
                has_photos = 3
            for query in queryset:
                count = 0
                if query.photo_1:
                    count += 1
                if query.photo_2:
                    count += 1
                if query.photo_3:
                    count += 1
                if query.photo_4:
                    count += 1
                if query.photo_5:
                    count += 1
                if count < has_photos:
                    slug = query.slug
                    queryset = queryset.exclude(slug__iexact=slug)
        
        open_house = data['open_house']
        queryset = queryset.filter(open_house__iexact=open_house)

        keywords = data['keywords']
        queryset = queryset.filter(description__icontains=keywords)

        serializer = ListingSerializer(queryset, many=True)

        return Response(serializer.data)
