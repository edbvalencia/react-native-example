ARG NODE_VERSION=18.18.0

FROM node:${NODE_VERSION}

WORKDIR /usr/src/app

RUN sh -c "$(curl -L https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -t robbyrussell \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-syntax-highlighting \
    -p https://github.com/zsh-users/zsh-completions \
    -p https://github.com/rupa/z/ && \ 
    curl -fsSL https://get.pnpm.io/install.sh | bash

EXPOSE 8081

CMD ["zsh"]
