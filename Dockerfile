FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:18-alpine

RUN apk add --no-cache dumb-init

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /app /appgroup 
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000
CMD ["npm", "start"]