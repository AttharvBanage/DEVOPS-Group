pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t farmer-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f farmer-jenkins || true'
                sh 'docker run -d -p 8096:80 --name farmer-jenkins farmer-app'
            }
        }
    }
}
