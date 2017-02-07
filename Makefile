.PHONY: koans

BIN_DIR = ./node_modules/.bin

all: link

link:
	cd node_modules && ln -fs ../src alonzo

koans: run-koans
test: run-tests

run-%:
	$(BIN_DIR)/babel-tape-runner $*/*
