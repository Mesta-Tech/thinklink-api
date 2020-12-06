import assert from 'assert';
import { Server } from 'http';
import url from 'url';
import axios from 'axios';

import app from '../src/app';

const port = app.get('port') || 8998;
const getUrl = (pathname?: string): string =>
  url.format({
    hostname: app.get('host') || 'localhost',
    protocol: 'http',
    port,
    pathname,
  });

describe('Feathers application tests', () => {
  let server: Server;

  before(function (done) {
    server = app.listen(port);
    server.once('listening', () => done());
  });

  after(function (done) {
    server.close(done);
  });
});
