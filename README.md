# lecture-docker

## Docker simple command
  - `docker container ps` menampilkan semua container yang sedang berjalan.
  - `docker container ps -a` menampilkan semua container di dalam komputer kita baik yang sedang berjalan maupun tidak.
  - `docker image ls` menampilkan semua image yang ada di dalam computer kita.
  - `docker build -t` membuat imag ebuatan kita sendiri.
  - `docker container run` menjalankan sebuah container.

## How to run this App
  - create image
  `docker build -t express-demo .`
  - run the image inside container
  `docker run -p 3001:3000 -v $(pwd):/var/www/demo-express-docker express-demo`