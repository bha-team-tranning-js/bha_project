FROM bedian
USER root 

RUN apt-get update  
RUN apt-get install -y nginx

ADD html /var/www/html

EXPOSE 80

CMD ['nginx','-g','daemon off;']

