FROM ubuntu
MAINTAINER George Boyle <george@thebuds.net>
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/Dockheas23/unquantifiable-treasures /opt/ut-meteor
EXPOSE 3000
CMD cd /opt/ut-meteor && meteor
