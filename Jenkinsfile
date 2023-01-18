pipeline {
    agent any

    tools {nodejs "NodeJS"}

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                    bat 'npm run cy:execution-allure'
                }
            }
        }
        stage('Reports') {
            steps {
                bat 'npm run allure:report'
                script {
                    allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                    ])
                }
            }
        }
    }
}