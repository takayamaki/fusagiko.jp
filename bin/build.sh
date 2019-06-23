#!/bin/bash
set -eu

yarn generate
git add docs
git commit -m "yarn generate $(date)"
