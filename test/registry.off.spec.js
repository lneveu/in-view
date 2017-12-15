import test from 'ava';
import { Registry } from '../src/registry';

test('Registry.off removes all handlers ', t => {

    let registry = Registry([]);

    registry.on('enter', () => {});
    registry.once('enter', () => {});
    registry.onceEach('enter', () => {});
    t.true(registry.handlers.enter.length === 1);
    t.true(registry.singles.enter.length === 1);
    t.true(registry.singlesEach.enter.length === 1);

    registry.on('exit', () => {});
    registry.once('exit', () => {});
    registry.onceEach('exit', () => {});

    registry.on('exit', () => {});
    registry.once('exit', () => {});
    registry.onceEach('exit', () => {});

    t.true(registry.handlers.exit.length === 2);
    t.true(registry.singles.exit.length === 2);
    t.true(registry.singlesEach.exit.length === 2);

    registry.off('enter', () => {});
    t.true(registry.handlers.enter.length === 0);
    t.true(registry.singles.enter.length === 0);
    t.true(registry.singlesEach.enter.length === 0);


    registry.off('exit', () => {});
    t.true(registry.handlers.exit.length === 0);
    t.true(registry.singles.exit.length === 0);
    t.true(registry.singlesEach.exit.length === 0);
});

test('Registry.off returns the registry', t => {
    let registry = Registry([]);
    t.deepEqual(registry.off('enter'), registry);
});
