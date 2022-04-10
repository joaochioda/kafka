# node-kafka-producer-consumer

docker exec -it --user root kafka bash
yum install net-tools

netstat -an
ifconfig

docker run -it --rm --network kafka_docker_example_net confluentinc/cp-kafka /bin/kafka-console-producer --bootstrap-server kafka:9092 --topic test_topic

docker run -it --rm --network kafka_docker_example_net confluentinc/cp-kafka /bin/kafka-console-consumer --bootstrap-server kafka:9092 --topic test_topic
