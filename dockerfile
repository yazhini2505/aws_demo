FROM mcr.microsoft.com/playwright:v1.58.2-jammy

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npx playwright install chrome msedge

COPY . .

CMD ["npx", "playwright", "test", "tests/weather.spec.js"]