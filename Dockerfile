FROM alpine:3.4
MAINTAINER David Katz <David.Katz@berkadia.com>
RUN export http_proxy=http://pacorpwsgw.gmaccm.com:8080 && \
	  export https_proxy=http://pacorpwsgw.gmaccm.com:8080; \
    apk add --update nginx bash curl
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY . /opt/app
EXPOSE 80
CMD ["nginx"]
