#!/usr/bin/env node
import name from '../src/cli.js';

const answer = `Welcome to the Brain Games!
May I have your name? ${name}
Hello, ${name}`;
console.log(answer);
