import os
import telebot
import requests
import json
import csv

yourkey = 'ce27e50f'
bot_id = '6449419012:AAEzkC1XgWJc9NODYg3Yc9d3zandQjNUBP8'

bot = telebot.TeleBot(bot_id)

@bot.message_handler(commands=['start', 'hello'])
def greet(message):
    global botRunning
    botRunning = True
    bot.reply_to(
        message, 'Hello there! I am a bot that will show movie information for you and export it in a CSV file.\n\nUse "/movie movie_name" command to search for a movie\n\nUse "/help" command to get help')

@bot.message_handler(commands=['stop', 'bye'])
def goodbye(message):
    global botRunning
    botRunning = False
    bot.reply_to(message, 'Bye!\nHave a good time')

@bot.message_handler(func=lambda message: botRunning, commands=['help'])
def helpProvider(message):
    bot.reply_to(message, '1.0 You can use \"/movie MOVIE_NAME\" command to get the details of a particular movie. For eg: \"/movie The Shawshank Redemption\"\n\n2.0. You can use \"/export\" command to export all the movie data in CSV format.\n\n3.0. You can use \"/stop\" or the command \"/bye\" to stop the bot.')

@bot.message_handler(func=lambda message: botRunning, commands=['movie'])
def getMovie(message):
    bot.reply_to(message, 'Getting movie info...')
    movie_name = message.text.split(' ', 1)[1]
    api_url = "http://www.omdbapi.com/?apikey={0}&t={1}".format(yourkey,movie_name)
    response = requests.get(api_url)
    data = response.json()

    if data['Response'] == 'True':
        poster = data['Poster']
        title = data['Title']
        date = data['Released']
        genre = data['Genre']
        rating = data['imdbRating']
        cast = data['Actors']
        plot = data['Plot']

        bot.send_photo(message.chat.id, poster)
        bot.send_message(message.chat.id, f"Title: {title}\nRelease date: {date}\nGenre: {genre}\nImdb Rating: {rating}\nCast: {cast}\nPlot: {plot}")

        if os.path.exists('movie_data.csv'):
            os.remove('movie_data.csv')

        with open('movie_data.csv', 'w', newline='', encoding='utf-8') as csvfile:
            csv_writer = csv.writer(csvfile)
            csv_writer.writerow(['Title', 'Release date', 'Genre', 'Imdb Rating', 'Actors', 'Plot', 'Poster url'])
            csv_writer.writerow([title, date, genre, rating, cast, plot, poster])

    elif data['Error'] == 'Movie not found!':
        bot.send_message(message.chat.id, 'Movie not found '+'\U0001F61E')

    else:
        bot.send_message(message.chat.id, 'Error fetching movie information')


@bot.message_handler(func=lambda message: botRunning, commands=['export'])
def getList(message):
    bot.reply_to(message, 'Generating file...')
    bot.send_document(message.chat.id, open('movie_data.csv', 'rb'))

@bot.message_handler(func=lambda message: botRunning)
def default(message):
    bot.reply_to(message, 'I did not understand '+'\U0001F615')

bot.infinity_polling()