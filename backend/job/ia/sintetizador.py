from decouple import config
from langchain.prompts import PromptTemplate
from langchain_openai import OpenAI

OPENAI_API_KEY = config("OPENAI_API_KEY")


"#TODO: Realizar pequeñas mejoras en la redacción sin realizar cambios sustanciales. Recordar que la redacción actual es bastante precisa y ajustado a lo que busco como prototipo, no requiere alteraciones significativas."

template = """
Eres un experto en evaluación de propuestas de empleo en programación, tienes varios años de experiencia en esta labor y sabes perfectamente que habilidades tecnicas (tecnologias que va a usar el postulante) y habiliades blandas que requerira el posutlante, ademas sabes con exactitud si una empresa se preocupo por hacer una buena oferta laboral o si denota ser una empresa muy despreocupada por reclutar talento. tu tarea es analizar la oferta para el puesto de {position} con la siguiente descripción:

{description}

Proporciona una lista concisa de habilidades técnicas clave requeridas para el puesto en caso de existir y si no existen solo di que no existen, si la oferta se centra mas en habilidades blandas o intangibles tambien dimelo y por que lo dices, si no cuenta con nada de eso igual avisame y para el final esto puede servir para saber si es una oferta laboral mal hecha o no.

Incluye también las habilidades blandas necesarias, en caso de no existir igual tomalo en cuenta para tu conlcusion final y avisame si no existen.

Evalúa la calidad de la oferta considerando la redacción, expresividad y la preocupación de la empresa por el bienestar de los empleados.

Tu objetivo es proporcionar una evaluación rápida y precisa, indicando si esta oferta destaca en el mercado laboral y si vale o no la pena.

El formato de tu respuesta sera el siguiente (Lo que esta en parentesis no debe formar parte de la respuesta, solo es una guia para que sepas que debes poner en cada parte):
Habilidades Tecnicas (Si existen, unicamente debe estar lleno si en la propuesta especifica las habilidades tecnicas que se requieren) 
Habilidades Blandas (Si existen, unicamente debe estar lleno si en la propuesta especifica las habilidades blandas que se requieren)
Habilidades No Mencionadas Recomendadas (no mencionadas en la propuesta, pero que podrían aportar al desempeño en el puesto de {position})
Conclusion (Si la oferta es buena o mala tiene cosas muy ambiguas o si su descripcion no es suficiente para entender que busca, destaca o no, vale la pena parece ser una mala empresa y demas)

"""


def evaluate_job(position, description):
    prompt = PromptTemplate(
        input_variables=["position", "description"], template=template
    )
    llm = OpenAI(api_key=OPENAI_API_KEY, temperature=0.7, max_tokens=1000)
    return llm(
        prompt.format(
            position=position,
            description=description,
        )
    )
