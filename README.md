# azp

Node utility for running [azure-xplat-cli](https://github.com/Azure/azure-xplat-cli) commands
from [TOML](https://github.com/toml-lang/toml) configuration files, because it's hard.

## Usage

Should just involve running:
```
azp run
```

## TODO

- [x] Hierarchical system for traversing TOML
- [x] Map `abc_xyz` field names to `--abc-xyz` flags
- [ ] `dry-run` argument to print commands to *stdout*
- [ ] `run` argument to run commands sequentially (run like commands in parallel, maybe?)
- [ ] Expand variables in strings
- [ ] Capture results of commands via `--json` flag and make available as variables, e.g. `{{vm.foo.result.id}}`
- [ ] Cover all `azure <blah>` types
- [ ] More intelligence around fields/flags, required, formatting etc?
- [ ] Generate empty TOML sections for each `<blah>`, e.g. `azp gen vm`
- [ ] Generate [Azure Templates](https://azure.microsoft.com/en-us/documentation/templates/)?

## Why?

I'd prefer to use [Terraform](http://terraform.io) but it doesn't support Azure Resource Management yet.