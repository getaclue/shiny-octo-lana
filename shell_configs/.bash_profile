export PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
export PATH=$PATH:/usr/local/mysql/bin
export PATH=$PATH:/usr/local/apache-maven/apache-maven-3.2.3/bin

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

if [[ -s $HOME/.rvm/scripts/rvm ]]; then
  source $HOME/.rvm/scripts/rvm;
fi

######################################
# Added by me
# 
# References:
# ----------
# http://natelandau.com/my-mac-osx-bash_profile/
# http://osxdaily.com/2012/02/21/add-color-to-the-terminal-in-mac-os-x/
# http://alias.sh/most-popular/usage
######################################
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad

export TERM="xterm-color"
PS1='\[\e[0;33m\]\u\[\e[0m\]@\[\e[0;32m\]\h\[\e[0m\]:\[\e[0;34m\]\w\[\e[0m\]\$ '

alias ls='ls -GFh'
alias ll='ls -FGlAhp'
alias lsd='ls -GFal | grep ^d'
alias subl='open -a /Applications/Sublime\ Text\ 2.app'

cd() { builtin cd "$@"; ll; } 
mcd () { mkdir -p "$1" && cd "$1"; }

# Added by me
######################################

# For light themes
# export LSCOLORS=ExFxBxDxCxegedabagacad
# For dark themes
# export LSCOLORS=GxFxCxDxBxegedabagaced
