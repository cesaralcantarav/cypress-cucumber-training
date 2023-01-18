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
                script {
                    try{
                        bat 'npm run cy:execution-allure'
                        bat 'npm run allure:report'
                    } finally{
                        publishReport();
                    }
                }
            }
        }
    }
}

    def publishReport(){
        publishHTML(target:[
            reportName: 'Allure Report',
            reportDir:  'allure-report',
            reportFiles: 'index.html',
            keepAll:     true,
            alwaysLinkToLastBuild: true,
            allowMissing: false
        ])
    }