env=$1

case $env in
    dev)
        echo "dev"
            docker-compose down
            docker-compose -f docker-compose.yml up
        ;;
    qa)
        echo "qa"
            docker-compose down
            docker-compose -f docker-compose.qa.yml up -d
        ;;
    prod)
        echo "prod"
        ;;
    *)
        echo "Usage: $0 {dev|qa|prod}"
        exit 1
        ;;
esac