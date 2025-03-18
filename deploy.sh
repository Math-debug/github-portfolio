#!/bin/bash

# Script para fazer deploy no GitHub Pages com segurança
# Uso: ./deploy.sh SEU_TOKEN

if [ -z "$1" ]; then
  echo "Por favor, forneça seu token GitHub como argumento."
  echo "Uso: ./deploy.sh SEU_TOKEN"
  exit 1
fi

TOKEN=$1

# Configurar o git para usar o token temporariamente
git config --local credential.helper "!f() { echo username=x-access-token; echo password=$TOKEN; }; f"

# Executar o deploy
echo "Iniciando o deploy para o GitHub Pages..."
GH_TOKEN=$TOKEN npm run deploy

# Limpar configuração de credenciais
git config --local --unset credential.helper

echo "Deploy concluído! Seu site estará disponível em alguns minutos."
