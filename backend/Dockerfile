ARG PYTHON_VERSION=3.8

FROM python:${PYTHON_VERSION}

RUN pip install pipenv

ENV PIPENV_VENV_IN_PROJECT=1

WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y libgl1-mesa-glx \
    && sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
       -t robbyrussell \
       -p https://github.com/zsh-users/zsh-autosuggestions \
       -p https://github.com/zsh-users/zsh-syntax-highlighting \
       -p https://github.com/zsh-users/zsh-completions \
       -p https://github.com/rupa/z/ \
    && apt-get purge -y --auto-remove \
    && rm -rf /var/lib/apt/lists/*

EXPOSE 8000

CMD [ "zsh"]
