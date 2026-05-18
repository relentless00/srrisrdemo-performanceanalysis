import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
    vus: 10, // virtual users
    duration: '10s', // test duration
};
export default function () {
    const res = http.get('http://localhost:3000/isr');
    check(res, {
        'status is 200': (r) => r.status === 200,
        'body contains ISR Page': (r) => r.body.includes('ISR Page'),
    });
    sleep(1);
}