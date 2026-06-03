# Usa uma imagem leve do Nginx
FROM nginx:alpine

# Copia todos os arquivos locais para a pasta padrão do Nginx
COPY . /usr/share/nginx/html/

# Expõe a porta 80 (padrão para web)
EXPOSE 80

# Inicia o Nginx automaticamente
CMD ["nginx", "-g", "daemon off;"]