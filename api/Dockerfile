FROM maven:3.8.3-openjdk-17

ENV PROJECT_HOME /usr/src/cooperfilme/api
ENV JAR_NAME cooperfilme.jar

RUN mkdir -p $PROJECT_HOME
WORKDIR $PROJECT_HOME

COPY . .

RUN mvn clean package -DskipTests

RUN mv $PROJECT_HOME/target/$JAR_NAME $PROJECT_HOME/

ENTRYPOINT ["java", "-jar", "-Dspring.profile.active=prod", "cooperfilme.jar"]
