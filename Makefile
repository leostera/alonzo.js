.PHONY: koans test coverage clean distclean

COVERAGE_DIR = ./coverage
BIN_DIR = ./node_modules/.bin

all: link

link: FORCE
	cd node_modules && ln -fs ../src alonzo

koans: run-koans
test: run-tests

coverage: .nyc_output
	$(BIN_DIR)/nyc report --reporter=text-lcov \
		> $(COVERAGE_DIR)/coverage.lcov

.nyc_output:
	make test

run-%:
	$(BIN_DIR)/nyc \
		$(BIN_DIR)/babel-tape-runner $*/* \
		| $(BIN_DIR)/colortape

clean:
	rm -rf $(COVERAGE_DIR) .nyc_output

distclean: clean
	rm -rf node_modules

FORCE:
