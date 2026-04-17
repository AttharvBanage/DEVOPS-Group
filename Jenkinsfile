pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t group-project-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f group-container || true'
                sh 'docker run -d -p 5020:80 --name group-container group-project-app'
            }
        }
    }
}
