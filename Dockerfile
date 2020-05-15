FROM hayd/alpine-deno:1.0.0
WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
COPY . ./

# Added to ENTRYPOINT of base image.
CMD ["run", "--allow-net", "--allow-read", "--allow-write", "index.js"]
