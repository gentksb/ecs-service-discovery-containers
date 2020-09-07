FROM node:lts-slim
EXPOSE 80

RUN cd /tmp \
    && apt update \
    && apt install -y wget \
    && wget https://s3.amazonaws.com/ec2-downloads-windows/SSMAgent/latest/debian_amd64/amazon-ssm-agent.deb \
    && dpkg -i amazon-ssm-agent.deb \
    && cp /etc/amazon/ssm/seelog.xml.template /etc/amazon/ssm/seelog.xml

WORKDIR /app

COPY run.sh .
COPY ./package.json .
COPY src/ ./src/

RUN npm install

CMD ["bash", "run.sh"]
