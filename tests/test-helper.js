import Application from 'blog-in-emberjs/app';
import config from 'blog-in-emberjs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
