##
## EPITECH PROJECT, 2025
## sample-c
## File description:
## Makefile
##

SRC	=	src/main.c

OBJ	=	$(SRC:.c=.o)

EXEC	=	main

CC	=	gcc

CFLAGS	=	-Wall -Wextra -Werror -O3

all: main

main: $(OBJ)
	$(CC) -o $(EXEC) $(OBJ) $(CFLAGS)

clean:
	rm -f $(OBJ) *.gch
	rm -f $(EXEC)
