FROM danieldent/meteor
MAINTAINER George Boyle <george@thebuds.net>
RUN git clone https://github.com/Dockheas23/unquantifiable-treasures /opt/ut-meteor
EXPOSE 3000
CMD cd /opt/ut-meteor && meteor
