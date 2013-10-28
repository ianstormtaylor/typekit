
build: components lib/*
	@component build --dev

components: component.json
	@component install --dev

clean:
	@rm -fr build components

node_modules: package.json
	@npm install

test: build
	@open http://localhost:7777

server: node_modules
	@node server

.PHONY: clean test