pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/AttharvBanage/DEVOPDSA.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t farmer-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8096:80 farmer-app'
            }
        }
    }
}
